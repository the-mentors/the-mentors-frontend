
import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import "./MentoringModal.css"

function MentoringModal({
    id,
    title,
    content,
    thumbnail,
    vote_average,
    nickname,
    profileUrl,
    hashTags,
    created_date,
    setModalOpen
}) {
    const ref = useRef();
    useOnClickOutside(ref, () => { setModalOpen(false) });

    return (
        <div className='presentation'>
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span onClick={() => setModalOpen(false)} className='modal-close'>
                        X
                    </span>
                    <img
                        className='modal__poster-img'
                        src='https://avatars.githubusercontent.com/u/106054507?v=4'
                        alt='modal__poster-img'
                    />

                    <div className='modal__content'>
                        <p className='modal__details'>
                            <span className='modal__user-perc'>
                                100% for you
                            </span>
                            {created_date}
                        </p>
                        <h2 className='modal__title'>{title}</h2>
                        <p className='modal__overview'> 평점: {vote_average}</p>
                        <p className='modal__overview'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentoringModal


