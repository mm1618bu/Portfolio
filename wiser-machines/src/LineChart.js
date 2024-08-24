import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const lineChartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = [
      { date: '2023-01-01', value: 30 },
      { date: '2023-02-01', value: 80 },
      { date: '2023-03-01', value: 45 },
      { date: '2023-04-01', value: 60 },
      { date: '2023-05-01', value: 20 },
      { date: '2023-06-01', value: 90 },
      { date: '2023-07-01', value: 55 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Parse the date / time
    const parseTime = d3.timeParse("%Y-%m-%d");

    // Format the data
    data.forEach(d => {
      d.date = parseTime(d.date);
      d.value = +d.value;
    });

    // Create the SVG container
    const svg = d3.select(lineChartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X scale
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    // Y scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    svg.append('g')
      .call(d3.axisLeft(y));

    // Define the line
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value));

    // Add the line path
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#69b3a2')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add circles at data points
    svg.selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 5)
      .attr('fill', '#69b3a2');

  }, []);

  return <div ref={lineChartRef}></div>;
};

export default LineChart;
