import { createAction, handleActions } from "redux-actions";
import { instance } from "../../public/api/axios";
import { getToken } from "../../public/shared/localStorage";
import { produce } from "immer";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../public/api/elements';

const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (user) => ({ user }));


const initialState = {
    user: [],
    is_login: false,
};


const loginApi = (email, password) => {
    return function (dispatch, getState, { history }) {
        instance.post(`api/v1/singin`, {
            email: email, password: password
        }).then((res) => {
            localStorage.setItem(ACCESS_TOKEN, res.data.ACCESS_TOKEN);
            localStorage.setItem(REFRESH_TOKEN, res.data.REFRESH_TOKEN);
        }).catch((err) => {
            window.alert("로그인 실패");
            history.push("/signin");
        });
    }
}

const currentUserApi = () => {
    return function (dispatch, getState, { history }) {
        if (getToken()) {
            instance.get(`api/v1/users`)
              .then((res) => {
                const user = res.data;
                dispatch(setUser({
                    username: user.username,
                    nickname: user.nickname,
                    profileUrl: user.profileUrl,
                    createdAt: user.createdAt
                }))
                history.push("/");
              })
          }
          window.alert("로그인 실패");
          history.push("/signin");
    }
}


const signupAPI = (
    email,
    password,
    username,
    nickname,
    profileUrl
) => {
    return function (dispatch, getState, { history }) {
        instance
            .post("/api/v1/signup", {
                email: email,
                password: password,
                username: username,
                nickname: nickname,
                profileUrl: profileUrl
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(() => {
                window.alert("회원가입에 성공했습니다!");
                history.push("/signin");
            })
            .catch((err) => window.alert(err));
    };
};

//이메일 중복확인
const emailCheckApi = (email) => {
    return function (dispatch, getState, { history }) {
        instance
            .post("/api/v1/signup/email", {
                email: email,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => {
                if (res.data) {
                    window.alert("중복되는 아이디가 있습니다.");
                } else {
                    window.alert("사용할 수 있는 아이디입니다.");
                }
            })
            .catch((err) => window.alert(err));
    }
}

//닉네임 중복확인
const nicknameCheckApi = (nickname) => {
    return function (dispatch, getState, { history }) {
        instance
            .post("/api/v1/signup/nickname", {
                nickname: nickname,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => {
                if (res.data) {
                    window.alert("중복되는 닉네임이 있습니다.");
                } else {
                    window.alert("사용할 수 있는 닉네임입니다.");
                }
            })
            .catch((err) => window.alert(err));
    }
}


export default handleActions(
    {
      [SET_USER]: (state, action) =>
        produce(state, (draft) => {
          draft.user = action.payload.user;
          draft.is_login = true;
        }),
    },
    initialState
  );

const actionCreators = {
    loginApi,
    signupAPI,
    emailCheckApi,
    nicknameCheckApi,
    currentUserApi,
};


export { actionCreators };