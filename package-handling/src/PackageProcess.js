import React, { useState, useEffect } from 'react';
import './PackageProgress.css'; // Ensure you have this CSS file for styling

const PackageProgress = () => {
  const steps = [
    'Unloaded',
    'Inducted',
    'On Belt',
    'On Cart',
    'Stowed',
    'Picked',
    'In Truck',
  ];

  // Generate letter-number combinations
  const generateLetterNumberArray = () => {
    const combinations = [];
    for (let letterCode = 'A'.charCodeAt(0); letterCode <= 'J'.charCodeAt(0); letterCode++) {
      for (let number = 1; number <= 26; number++) {
        combinations.push(String.fromCharCode(letterCode) + '-' + number);
      }
    }
    return combinations;
  };

  // Create an array of letter-number combinations
  const letterNumberArray = generateLetterNumberArray();

  // Function to generate random data
  const generateRandomPackages = (count) => {
    const sizes = ['Small', 'Medium', 'Large'];
    const packages = [];

    for (let i = 0; i < count; i++) {
      // Randomly select an ID from the letterNumberArray
      const id = Math.floor(Math.random()*1000);
      
      packages.push({
        id: id,
        shipDate: new Date(
          Date.now()
        ).toISOString().split('T')[0], // Random date in ISO format
        size: sizes[Math.floor(Math.random() * sizes.length)],
        weight: `${Math.floor(Math.random() * 20) + 1} kg`, // Random weight between 1 and 20 kg
        bin: letterNumberArray[Math.floor(Math.random() * letterNumberArray.length)], // Random bin ID
        currentStep: 0, // Start at the first step
        interval: Math.floor(Math.random() * (16 - 7 + 1)) + 7 // Random interval between 2 and 7 seconds
      });
    }

    return packages;
  };

  // Generate 100 package records
  const [packageList, setPackageList] = useState(generateRandomPackages(100));
  const [filteredPackages, setFilteredPackages] = useState(packageList);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedStep, setSelectedStep] = useState('');

  // Effect to automate step changes
  useEffect(() => {
    const timers = packageList.map((pkg, index) =>
      setInterval(() => {
        setPackageList((prevPackages) => {
          const newPackages = [...prevPackages];
          if (newPackages[index].currentStep < steps.length - 1) {
            newPackages[index].currentStep += 1; // Move to the next step
          }
          return newPackages;
        });
      }, pkg.interval)
    );

    // Cleanup intervals on component unmount
    return () => timers.forEach((timer) => clearInterval(timer));
  }, [packageList]);

  // Filter packages based on search term, size, and step
  useEffect(() => {
    let filtered = packageList;

    if (searchTerm) {
      filtered = filtered.filter(pkg =>
        pkg.id.includes(searchTerm) || 
        pkg.weight.includes(searchTerm) || 
        pkg.bin.includes(searchTerm)
      );
    }

    if (selectedSize) {
      filtered = filtered.filter(pkg => pkg.size === selectedSize);
    }

    if (selectedStep) {
      filtered = filtered.filter(pkg => steps[packageList.indexOf(pkg)] === selectedStep);
    }

    setFilteredPackages(filtered);
  }, [searchTerm, selectedSize, selectedStep, packageList]);

  return (
    <div className="package-progress-container">
      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <select
          value={selectedStep}
          onChange={(e) => setSelectedStep(e.target.value)}
        >
          <option value="">All Steps</option>
          {steps.map((step, index) => (
            <option key={index} value={step}>{step}</option>
          ))}
        </select>
      </div>

      {/* Table Layout for Package Information and Progress */}
      <div className="package-progress-table">
        <table>
          <thead>
            <tr>
              <th>Package Information</th>
              <th>Progress Steps</th>
            </tr>
          </thead>
          <tbody>
            {filteredPackages.map((packageInfo, index) => (
              <tr key={index}>
                {/* Package Information */}
                <td className="package-info">
                  <span><strong>Package ID:</strong> {packageInfo.id}</span><br />
                  <span><strong>Ship Date:</strong> {packageInfo.shipDate}</span><br />
                  <span><strong>Size:</strong> {packageInfo.size}</span><br />
                  <span><strong>Weight:</strong> {packageInfo.weight}</span><br />
                  <span><strong>Bin #:</strong> {packageInfo.bin}</span><br />
                </td>

                {/* Progress Grid */}
                <td className="progress-grid">
                  <div className="grid-container">
                    {steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className={`progress-step ${stepIndex <= packageInfo.currentStep ? 'active' : ''}`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageProgress;
