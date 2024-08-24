import React from 'react';
import './Legend.css';

const Legend = () => {
  const techStacks = [
    { name: 'LAMP Stack', components: 'Linux, MySQL, PHP' },
    { name: 'MEAN Stack', components: 'MongoDB, Express.js, Angular, Node.js' },
    { name: 'MERN Stack', components: 'MongoDB, Express.js, React, Node.js' },
    { name: 'MEVN Stack', components: 'MongoDB, Express.js, Vue.js, Node.js' },
    { name: 'LEMP Stack', components: 'Linux, Nginx, PHP/Python/Perl' },
    { name: 'JAMstack', components: 'JavaScript, APIs, Markup' },
    { name: 'Ruby on Rails Stack', components: 'Ruby, Rails' },
    { name: '.NET Stack', components: 'C#, ASP.NET Core' },
    { name: 'Serverless Stack', components: 'JavaScript/Python/Other, AWS Lambda/Azure Functions/Google Cloud Functions' },
    { name: 'PERN Stack', components: 'PostgreSQL, Express.js, React, Node.js' },
  ];

  return (
    <><ul>
          {techStacks.map((stack, index) => (
              <li key={index}>{stack.name} <span>({stack.components})</span></li>
          ))}
          <p>If a shift starts, ends or runs between 10pm and 6am, it will be marked as late night.</p>
      </ul></>
  
  );
};

export default Legend;