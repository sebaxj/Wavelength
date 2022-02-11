import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import '../styles/deliverables.css';

const Deliverables: React.FC = () => {
    return (
<div>
  <Table responsive="sm">
    <tbody>
      <tr>
        <td>Needfinding Presentation</td>
        <td><a href="../static/needfinding.pdf" download>PDF</a></td>
        <td><a href="../static/needfinding.pptx" download>PPT</a></td>
      </tr>
      <tr>
        <td>POV Presentation</td>
        <td><a href="../static/pov.pdf" download>PDF</a></td>
        <td><a href="../static/pov.pptx" download>PPT</a></td>
      </tr>
      <tr>
        <td>Concept Video</td>
        <td>MP4</td>
        <td></td>
      </tr>
      <tr>
        <td>Concept Video Presentation</td>
        <td><a href="../static/concept_vid.pdf" download>PDF</a></td>
        <td><a href="../static/concept_vid.pptx" download>PPT</a></td>
      </tr>
      <tr>
        <td>Lo-Fi Prototype Presentation</td>
        <td><a href="../static/lofi.pdf" download>PDF</a></td>
        <td><a href="../static/lofi.pptx" download>PPT</a></td>
      </tr>
      <tr>
        <td>Lo-Fi Prototype Report</td>
        <td>PDF</td>
        <td></td>
      </tr>
    </tbody>
  </Table>
  
</div>
    );
};

export default Deliverables;