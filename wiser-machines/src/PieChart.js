import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = [
      { label: 'Windows', value: 30 },
      { label: 'Mac', value: 70 },
      { label: 'iOS', value: 20 },
      { label: 'Android', value: 50 },
      { label: 'Other', value: 40 }
    ];

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    // Create the pie chart layout
    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().outerRadius(radius - 10).innerRadius(0);

    // Color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeCategory10);

    // Clear previous chart if it exists
    const svgContainer = d3.select(pieChartRef.current);
    svgContainer.selectAll("*").remove();

    // Create the SVG container
    const svg = svgContainer
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create the pie chart slices
    const slices = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add labels
    svg.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .style('text-anchor', 'middle')
      .text(d => d.data.label);

    // Cleanup function to remove the chart when the component unmounts or updates
    return () => {
      svgContainer.selectAll("*").remove();
    };
  }, []);

  return <div ref={pieChartRef}></div>;
};

export default PieChart;
