import React from 'react';
import './css/Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>Bem-vindo ao Mundo do Drifting</h1>
                <p>Experimente a emoção e a adrenalina do drifting. Junte-se a nós enquanto exploramos a arte dos deslizamentos controlados e manobras em alta velocidade. Seja você um drifter experiente ou um curioso, há algo para todos no mundo do drifting.</p>
                <img src="/image/R.jpg" alt="Drifting" className="home-image"/>
                
                <h2>O Que é Drifting?</h2>
                <p>Drifting é uma técnica de condução onde o motorista intencionalmente supera a aderência, causando perda de tração nas rodas traseiras durante as curvas, enquanto mantém o controle e dirige o carro por toda a curva. Não é apenas um estilo de corrida, mas também uma forma única de entretenimento e exibição.</p>
                
                <h2>História do Drifting</h2>
                <p>O drifting originou-se no Japão na década de 1970, com pilotos de rua como Kunimitsu Takahashi e Keiichi Tsuchiya popularizando a técnica. Desde então, o drifting evoluiu para um esporte global, com competições em todo o mundo e uma comunidade dedicada de entusiastas e profissionais.</p>
                
                <h2>Dicas para Iniciantes</h2>
                <ul>
                    <li><strong>Conheça seu carro:</strong> Entenda como seu carro responde e pratique em um ambiente seguro.</li>
                    <li><strong>Comece devagar:</strong> Aprenda as técnicas básicas de controle de tração e aceleração.</li>
                    <li><strong>Participe de eventos locais:</strong> Junte-se a uma comunidade de drifters para aprender e compartilhar experiências.</li>
                </ul>
                
                <h2>Eventos e Competições</h2>
                <p>O drifting é praticado em diversos eventos e competições ao redor do mundo, incluindo o famoso <a href="/events">Formula Drift</a>, que atrai pilotos e fãs internacionais. Fique atento ao nosso calendário para não perder nenhum evento emocionante.</p>
            </div>
        </section>
    );
}

export default Home;
