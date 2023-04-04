import Link from 'next/link'
import React from 'react'

export default function Index({ showSideNavBar, setShowSideNavBar }) {

  const [showDash, setShowDash] = React.useState(false)

  return (
    <div className="sideNavBar">
      {
        showSideNavBar && (
          <div className="sideNavBar__container bg-white">
            <div className="container__profile flex gap-2 items-center ">
              <div className="profile__image"></div>
              <div className="profile__text flex flex-col">
                <span className="text__name">Sumit Kumar</span>
                <span className="text__email">sumit@gmail.com</span>
              </div>
            </div>
            <div className="container__navlinks flex flex-col items-center">
              <Link href="#" className="navlinks__item">
                <span className="item__icon"></span>
                <span className="item__text">Dashboard</span>
              </Link>
              <button onClick={() => setShowDash(showDash => !showDash)} className="navlinks__item">
                <span className="item__icon"></span>
                <span className="item__text">Toogle</span>
                <span className="item__dropdown__icon"></span>
                <div className={`navlinks__item__toggle ${!showDash && 'hidden'} flex flex-col`}>
                  <Link href="#" className="toggle__container__links">
                    <span className="links__icon"></span>
                    <span className="links__text">hey</span>
                  </Link>
                  <Link href="#" className="toggle__container__links">
                    <span className="links__icon"></span>
                    <span className="links__text">hey</span>
                  </Link>
                  <Link href="#" className="toggle__container__links">
                    <span className="links__icon"></span>
                    <span className="links__text">hey</span>
                  </Link>
                  <Link href="#" className="toggle__container__links">
                    <span className="links__icon"></span>
                    <span className="links__text">hey</span>
                  </Link>
                </div>
              </button>
              <Link href="/link" className="navlinks__item">
                <span className="item__icon"></span>
                <span className="item__text">new link</span>
              </Link>
            </div>
            <div className="container__button"></div>
          </div>
        )
      }
    </div>
  )
}