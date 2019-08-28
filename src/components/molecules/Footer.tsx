import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'


const App: React.FC = () => (
  <div id="footer">
    <div className="footerContents">
      <div className="operatorContent">
        <div className="label">運営者</div>
        <div className="icon">
          <a
            href="https://twitter.com/hand12_k"
            target="_blank"
            rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              hand12_k
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default App;
