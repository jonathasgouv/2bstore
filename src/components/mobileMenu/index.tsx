import { FC } from 'react'

import './mobileMenu.scss'
import use2BStore from '../../stores/2bStore'

const MobileMenu: FC = () => {
    const { isOpen, toggleMobileMenu } = use2BStore(state => {
        return {
            isOpen: state.isMobileMenuOpen,
            toggleMobileMenu: state.toggleMobileMenu
        }
    })


    return (
        <div className={`mobileMenuWrapper ${isOpen ? 'open' : ''}`}>
            <aside className="mobileMenu">
                <div className="mobileMenuHeader">
                    <p className="mobileMenuTitle">Menu</p>
                    <span className="mobileMenuCloseBtn" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.828" height="11.828" viewBox="0 0 11.828 11.828">
                            <g id="close" transform="translate(-12.086 -12.086)">
                                <g id="Icon_feather-x-circle" data-name="Icon feather-x-circle">
                                    <path id="Caminho_689" data-name="Caminho 689" d="M22.5,13.5l-9,9" fill="none" stroke="#ffccd8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Caminho_690" data-name="Caminho 690" d="M13.5,13.5l9,9" fill="none" stroke="#ffccd8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="mobileMenuBody">
                    <div className="departments">
                        <ul className="departmentsList">
                            <a href="#">
                                <li>
                                    Masculino
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    Feminino
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    Plus Size
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    Juvenil
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    Infantil
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    Acessórios
                                </li>
                            </a>
                            <a href="#" className="ofertas">
                                <li>
                                    Ofertas
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default MobileMenu