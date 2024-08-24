import './App.css';
import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import MachineStatus from './MachineStatus';
import MachineFailure from './MachineFailure';
import Side from './Side';

export default function Dashboard() {
    return (
        <div className="App">
            <Side></Side>
        <div className='row1'>
            <span><PieChart/></span>
            <span><BarChart/></span>
            <span><LineChart /></span>
        </div>
        <div className='row2'>
            <span><MachineStatus/></span>
            <span><MachineFailure/></span>
            <span></span>
        </div>
        </div>
    );
}