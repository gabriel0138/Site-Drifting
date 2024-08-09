import React, { useEffect, useState } from 'react';
import './eventos/Eventos.css';
import eventosData from './eventos/eventos.json'; // Certifique-se de que o caminho está correto

const Eventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        // Simulando a leitura dos eventos do arquivo JSON
        setEventos(eventosData);
    }, []);

    return (
        <section id="events" className="events">
            <h2>Próximos Eventos de Drift</h2>
            <div className="event-list">
                {eventos.map((evento, index) => (
                    <div key={index} className="event-card">
                        <h3>{evento.nome}</h3>
                        <p><strong>Data:</strong> {evento.data}</p>
                        <p><strong>Local:</strong> {evento.local}</p>
                        <p>{evento.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Eventos;
