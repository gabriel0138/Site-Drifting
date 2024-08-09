import React from 'react';
import './css/Gallery.css';

const Gallery = () => {
    const carrosParaDrift = [
        'Toyota Supra Mark IV',
        'Nissan Silvia S15',
        'Mazda RX-7',
        'Ford Mustang GT',
        'Subaru BRZ',
        'Chevrolet Camaro SS',
        'BMW M3 E46',
        'Honda S2000'
    ];

    return (
        <section id="gallery" className="gallery">
            <h2>Melhores Carros para Drift</h2>
            <p>Descubra os carros mais recomendados para drifting. Estes modelos são conhecidos por suas excelentes características de manuseio e desempenho nas pistas de drift.</p>
            <ul className="car-list">
                {carrosParaDrift.map((carro, index) => (
                    <li key={index} className="car-item">{carro}</li>
                ))}
            </ul>
        </section>
    );
}

export default Gallery;
