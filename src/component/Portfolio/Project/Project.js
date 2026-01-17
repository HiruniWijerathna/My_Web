import React, { useState } from 'react';
import Development from '../Development/Development';
import Design from '../Design/Design';   // ✅ fix typo
import "./Project.css";

function Project() {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        My <span>Project</span>
      </h2>

      {/* Buttons */}
      <div className="portfolio-buttons">
        <button
          className={activeTab === 'web' ? 'active' : ''}
          onClick={() => setActiveTab('web')}
        >
          Development Projects
        </button>

        <button
          className={activeTab === 'uiux' ? 'active' : ''}
          onClick={() => setActiveTab('uiux')}
        >
          Design Projects
        </button>
      </div>

      {/* CONDITIONAL RENDERING */}
      {activeTab === 'web' && <Development />}
      {activeTab === 'uiux' && <Design />}

    </section>
  );
}

export default Project;
