import React from 'react';
import './Carousel.css';

export default function Carousel() {
    return <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className="active" aria-current="true" aria-label="Slide 5"></button>

            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        </div>


        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>


            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_640.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>


            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>


            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2021/11/16/15/35/technology-6801334_640.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Forth slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>


            <div className="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056_640.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Fifth slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>


            <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/858053178/photo/digital-electronic-components-circuit-boards-technology-era-india-map.jpg?s=612x612&w=0&k=20&c=m4bdxNAGOKGYxKUD3Pq6OzdL_E1HlA0K6nVyhrTYO30=" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Sixth slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>



        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>


        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        
    </div>

}
