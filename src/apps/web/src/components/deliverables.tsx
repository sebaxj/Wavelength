import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import '../styles/deliverables.css';

const Deliverables: React.FC = () => {
    return (
        <div>
            <Table responsive="sm">
                <tbody>
                    {/*}                    <tr>
                        <td>Needfinding Presentation</td>
                        <td>
                            <a href="../static/needfinding.pdf" download>
                                PDF
                            </a>
                        </td>
                        <td>
                            <a href="../static/needfinding.pptx" download>
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>POV Presentation</td>
                        <td>
                            <a href="../static/pov.pdf" download>
                                PDF
                            </a>
                        </td>
                        <td>
                            <a href="../static/pov.pptx" download>
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Concept Video</td>
                        <td>
                            <a href="https://www.youtube.com/watch?v=CsM0QInyM2k">YouTube</a>
                        </td>
                        <td>
                            <a href="../static/concept.mp4" download>
                                MP4
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Concept Video Presentation</td>
                        <td>
                            <a href="../static/concept_vid.pdf" download>
                                PDF
                            </a>
                        </td>
                        <td>
                            <a href="../static/concept_vid.pptx" download>
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Lo-Fi Prototype Presentation</td>
                        <td>
                            <a href="../static/lofi.pdf" download>
                                PDF
                            </a>
                        </td>
                        <td>
                            <a href="../static/lofi.pptx" download>
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Lo-Fi Prototype Report</td>
                        <td>
                            <a href="../static/lofi_report.pdf" download>
                                PDF
                            </a>
                        </td>
                        <td></td>
                    </tr>*/}
                    <tr>
                        <td>Needfinding Presentation</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/needfinding.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/needfinding.pptx"
                                target="_blank"
                            >
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>POV Presentation</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/pov.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/pov.pptx"
                                target="_blank"
                            >
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Concept Video</td>
                        <td>
                            <a href="https://www.youtube.com/watch?v=CsM0QInyM2k" target="_blank">
                                YouTube
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/concept.mp4"
                                target="_blank"
                            >
                                MP4
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Concept Video Presentation</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/concept_vid.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/concept_vid.pptx"
                                target="_blank"
                            >
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Lo-Fi Prototype Presentation</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/lofi.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/lofi.pptx"
                                target="_blank"
                            >
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Lo-Fi Prototype Report</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/lofi_report.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Med-Fi Prototype Presentation</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/medfi.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/medfi.pptx"
                                target="_blank"
                            >
                                PPT
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Med-Fi Prototype README</td>
                        <td>
                            <a
                                href="https://web.stanford.edu/class/cs147/projects/BecomingIron-Man/Wavelength/static/README.pdf"
                                target="_blank"
                            >
                                PDF
                            </a>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Deliverables;
