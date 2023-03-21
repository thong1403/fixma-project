import React, { useState, useEffect } from 'react';


function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Test() {
  return (
    <div>
      <FadeInSection>
        <h1>Welcome to my website</h1>
        <p>This is some content that will fade in when the user scrolls to it.</p>
        
      </FadeInSection>
    </div>
  );
}

export default Test;
