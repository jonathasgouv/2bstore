import { FC } from 'react'

import './footer.scss'

const Footer: FC = () => {
    return (
        <footer>
            <p className="footerCopyright">
                © 2022 AGÊNCIA 2B DIGITAL
                <br />
                <br />
                Avenida Ibirapuera, 2315 - Moema, São Paulo
                <br />
                Loja fictícia desenvolvida para fins de estudos e testes
            </p>
            <div className="logo">
                <svg id="logotipo-2bigital" xmlns="http://www.w3.org/2000/svg" width="152.585" height="40" viewBox="0 0 152.585 40">
                    <path id="Caminho_8" data-name="Caminho 8" d="M23.049-111.75h2.908v29.565H23.049v-3.884a8.678,8.678,0,0,1-2.96,3.209,8.025,8.025,0,0,1-4.455,1.215A10.577,10.577,0,0,1,11.4-82.5a11.086,11.086,0,0,1-3.479-2.357,11.086,11.086,0,0,1-2.357-3.479,10.577,10.577,0,0,1-.852-4.237,10.651,10.651,0,0,1,.852-4.247,11.052,11.052,0,0,1,2.357-3.489,11.086,11.086,0,0,1,3.479-2.357,10.577,10.577,0,0,1,4.237-.852,8.025,8.025,0,0,1,4.455,1.215,8.725,8.725,0,0,1,2.96,3.188ZM15.655-84.469a6.619,6.619,0,0,0,3.821-1.09A7.114,7.114,0,0,0,21.937-88.5a9.513,9.513,0,0,0,.862-4.071,9.5,9.5,0,0,0-.872-4.123,7.128,7.128,0,0,0-2.471-2.918,6.628,6.628,0,0,0-3.8-1.08,7.609,7.609,0,0,0-4.008,1.09A8.214,8.214,0,0,0,8.76-96.66a7.962,7.962,0,0,0-1.08,4.091,7.83,7.83,0,0,0,1.1,4.1A8.3,8.3,0,0,0,11.7-85.549,7.605,7.605,0,0,0,15.655-84.469Zm15.556-18.484h2.908v20.768H31.211ZM32.685-107a1.662,1.662,0,0,1-1.194-.467A1.557,1.557,0,0,1,31-108.644a1.557,1.557,0,0,1,.488-1.173,1.662,1.662,0,0,1,1.194-.467,1.636,1.636,0,0,1,1.173.467,1.557,1.557,0,0,1,.488,1.173,1.557,1.557,0,0,1-.488,1.173A1.636,1.636,0,0,1,32.685-107Zm23.78,4.05h2.908v21.537a8.326,8.326,0,0,1-.862,3.738,10.127,10.127,0,0,1-2.326,3.063,11.092,11.092,0,0,1-3.333,2.066,10.364,10.364,0,0,1-3.884.748,9.383,9.383,0,0,1-4.174-.987,11.487,11.487,0,0,1-3.5-2.627,9.679,9.679,0,0,1-2.108-3.634l2.679-1.225A6.791,6.791,0,0,0,43.35-77.46a8.215,8.215,0,0,0,2.575,1.994,6.769,6.769,0,0,0,3.043.737,7.476,7.476,0,0,0,2.773-.53A8.478,8.478,0,0,0,54.149-76.7a6.954,6.954,0,0,0,1.693-2.129,5.588,5.588,0,0,0,.623-2.586v-4.59a8.816,8.816,0,0,1-2.918,3.157,7.609,7.609,0,0,1-4.268,1.2,10.008,10.008,0,0,1-4.1-.852A10.64,10.64,0,0,1,41.8-84.853a11.087,11.087,0,0,1-2.274-3.479,10.924,10.924,0,0,1-.82-4.237,11,11,0,0,1,.82-4.247,11.056,11.056,0,0,1,2.274-3.489,10.64,10.64,0,0,1,3.375-2.357,10.008,10.008,0,0,1,4.1-.852,7.657,7.657,0,0,1,4.268,1.194,8.68,8.68,0,0,1,2.918,3.167ZM49.3-84.469a6.239,6.239,0,0,0,3.728-1.121,7.357,7.357,0,0,0,2.42-2.97,9.463,9.463,0,0,0,.852-4.008,9.444,9.444,0,0,0-.862-4.06A7.34,7.34,0,0,0,53-99.578a6.258,6.258,0,0,0-3.7-1.111,7.091,7.091,0,0,0-3.853,1.09A7.914,7.914,0,0,0,42.7-96.66a8.341,8.341,0,0,0-1.018,4.091,8.151,8.151,0,0,0,1.038,4.081,8.1,8.1,0,0,0,2.773,2.928A7.019,7.019,0,0,0,49.3-84.469Zm14.849-18.484h2.908v20.768H64.149ZM65.624-107a1.662,1.662,0,0,1-1.194-.467,1.557,1.557,0,0,1-.488-1.173,1.557,1.557,0,0,1,.488-1.173,1.662,1.662,0,0,1,1.194-.467,1.636,1.636,0,0,1,1.173.467,1.557,1.557,0,0,1,.488,1.173,1.557,1.557,0,0,1-.488,1.173A1.636,1.636,0,0,1,65.624-107Zm17.882,6.957H78.542l-.021,17.861H75.613l.021-17.861H71.875v-2.908h3.759l-.021-6.521h2.908l.021,6.521h4.964Zm20.395-2.908h2.908v20.768h-2.928l-.083-3.863a8.37,8.37,0,0,1-2.845,3.188,7.7,7.7,0,0,1-4.361,1.215,10.665,10.665,0,0,1-4.278-.862,11.2,11.2,0,0,1-3.51-2.378,11.058,11.058,0,0,1-2.368-3.51,10.778,10.778,0,0,1-.852-4.278,10.752,10.752,0,0,1,.831-4.216,10.762,10.762,0,0,1,2.326-3.468,10.969,10.969,0,0,1,3.448-2.336,10.488,10.488,0,0,1,4.2-.841,8.256,8.256,0,0,1,4.548,1.236,9.04,9.04,0,0,1,3.053,3.229ZM96.652-84.469a6.517,6.517,0,0,0,3.832-1.111,7.042,7.042,0,0,0,2.42-2.98,9.358,9.358,0,0,0,.768-4.112,9.511,9.511,0,0,0-.976-4.06,7.361,7.361,0,0,0-2.523-2.887,6.688,6.688,0,0,0-3.79-1.07,7.592,7.592,0,0,0-4.039,1.111,8,8,0,0,0-2.856,2.97,7.893,7.893,0,0,0-.976,4.143,8.076,8.076,0,0,0,1.215,4.039,8.5,8.5,0,0,0,2.96,2.887A7.716,7.716,0,0,0,96.652-84.469Zm15.556,2.285V-111.75h2.908v29.565Z" transform="translate(37.47 111.801)" fill="#110d2f" />
                    <path id="Caminho_7" data-name="Caminho 7" d="M6.28-82.325v-5.566q1.163-.727,2.908-2.025t3.666-2.918q1.921-1.62,3.593-3.292A24.58,24.58,0,0,0,19.177-99.3a4.751,4.751,0,0,0,1.059-2.544,3.76,3.76,0,0,0-.519-1.942,3.941,3.941,0,0,0-1.381-1.4,3.651,3.651,0,0,0-1.921-.519,3.705,3.705,0,0,0-1.931.519,4,4,0,0,0-1.4,1.4,3.7,3.7,0,0,0-.53,1.942H6.322A9.7,9.7,0,0,1,7.713-107a10.3,10.3,0,0,1,3.686-3.614,9.831,9.831,0,0,1,5.016-1.329,9.736,9.736,0,0,1,5.047,1.35,10.217,10.217,0,0,1,3.645,3.645,9.811,9.811,0,0,1,1.36,5.1,9.238,9.238,0,0,1-.374,2.648A11.083,11.083,0,0,1,25-96.728a18.741,18.741,0,0,1-1.776,2.482q-1.059,1.267-2.44,2.669t-3.043,3.022H28.583v6.231Zm33.728-21.35a10.646,10.646,0,0,1,5.524,1.475A11.14,11.14,0,0,1,49.5-98.244a10.553,10.553,0,0,1,1.475,5.493,10.725,10.725,0,0,1-.852,4.258,11.02,11.02,0,0,1-2.357,3.5,11.052,11.052,0,0,1-3.489,2.357,10.7,10.7,0,0,1-4.268.852,6.109,6.109,0,0,1-2.949-.706,8.485,8.485,0,0,1-2.285-1.786v1.952H28.544V-111.89h6.231v10.708a8.129,8.129,0,0,1,2.285-1.8A6.182,6.182,0,0,1,40.008-103.675Zm-.083,15.867a4.327,4.327,0,0,0,2.347-.665,4.851,4.851,0,0,0,1.682-1.786,5.044,5.044,0,0,0,.623-2.492,5,5,0,0,0-.623-2.471,4.935,4.935,0,0,0-1.682-1.8,4.277,4.277,0,0,0-2.347-.675,4.191,4.191,0,0,0-2.316.675,4.966,4.966,0,0,0-1.672,1.8,5,5,0,0,0-.623,2.471,5.044,5.044,0,0,0,.623,2.492,4.88,4.88,0,0,0,1.672,1.786A4.239,4.239,0,0,0,39.925-87.808Z" transform="translate(-6.28 111.941)" fill="#e8335d" />
                </svg>
            </div>
        </footer>
    )
}

export default Footer