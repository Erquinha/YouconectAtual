import React, { useState } from 'react';
import '../styles/profile.css';
import FooterMenu from './FooterMenu';

const Profile = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    'Tecnologia', 'Leitura', 'Astronomia', 'Arte', 'Idiomas'
  ];

  const handleInterestClick = (interest) => {
    setSelectedInterests((prevSelected) => 
      prevSelected.includes(interest) 
        ? prevSelected.filter(item => item !== interest) 
        : [...prevSelected, interest]
    );
  };

  return (
    <><div className="profile-container">
      <h2> Personalizar perfil </h2>
      <div className="profile-section">
        <div className="profile-picture">
          <img src="#" alt="Foto de perfil" />
          <button> Foto de perfil </button>
        </div>
        <div className="profile-options">
          <button> Biografia </button>
          <button> Adicionar Cursos </button>
          <button> Editar outros dados </button>
        </div>
      </div>

      <div className="interests-section">
        <h3> Selecione seus interesses </h3>
        <div className="interests-grid">
          {interests.map(interest => (
            <button
              key={interest}
              className={selectedInterests.includes(interest) ? 'selected' : ''}
              onClick={() => handleInterestClick(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <button className="save-button"> Salvar </button>
    </div><FooterMenu /></>
  );
};

export default Profile;