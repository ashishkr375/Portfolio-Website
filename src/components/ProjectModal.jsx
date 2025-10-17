import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project?.images || [project?.texture];

  // Handle manual image navigation
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    if (isOpen && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isOpen, images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Add custom scrollbar styles and responsive mobile styles
      const style = document.createElement('style');
      style.id = 'modal-scrollbar-style';
      style.innerHTML = `
        .modal-scroll-content::-webkit-scrollbar {
          width: 8px;
        }
        .modal-scroll-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .modal-scroll-content::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
        .modal-scroll-content::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
        
        /* Hide scrollbar for thumbnail container */
        .thumbnail-container::-webkit-scrollbar {
          display: none;
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .modal-content {
            max-height: 95vh !important;
            width: 95vw !important;
          }
          .modal-wrapper {
            flex-direction: column !important;
            height: auto !important;
          }
          .modal-image-section {
            width: 100% !important;
            min-height: 250px !important;
            max-height: 250px !important;
            flex-shrink: 0 !important;
          }
          .modal-scroll-content {
            width: 100% !important;
            max-height: calc(95vh - 250px) !important;
            padding: 20px !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.overflow = '';
        const styleElement = document.getElementById('modal-scrollbar-style');
        if (styleElement) {
          styleElement.remove();
        }
      };
    }
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="modal-overlay"
        onClick={onClose}
        onWheel={(e) => e.preventDefault()}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {/* Modal Content */}
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '0',
            maxWidth: '1200px',
            width: '90vw',
            maxHeight: '85vh',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          <div className="modal-wrapper" style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
            {/* Image Section */}
            <div 
              className="modal-image-section"
              style={{ 
                width: '50%', 
                position: 'relative', 
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px'
              }}
            >
              {/* Image Counter */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                zIndex: 10
              }}>
                {currentImageIndex + 1}/{images.length}
              </div>

              {/* Previous Button */}
              {images.length > 1 && (
                <button
                  onClick={goToPrevious}
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  ‹
                </button>
              )}

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={goToNext}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    color: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  ›
                </button>
              )}

              {/* Main Image Display */}
              <div style={{ flex: 1, width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: index === currentImageIndex ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px'
                    }}
                  >
                    {image.endsWith('.mp4') ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                        src={image}
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Project screenshot ${index + 1}`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  gap: '8px',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                className="thumbnail-container"
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => goToImage(index)}
                      style={{
                        minWidth: '60px',
                        height: '45px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: index === currentImageIndex ? '2px solid #3b82f6' : '2px solid rgba(255, 255, 255, 0.2)',
                        opacity: 1,
                        transition: 'all 0.3s',
                        flexShrink: 0,
                        backgroundColor: '#000'
                      }}
                      onMouseEnter={(e) => {
                        if (index !== currentImageIndex) {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {image.endsWith('.mp4') ? (
                        <video
                          muted
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          src={image}
                        />
                      ) : (
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div 
              className="modal-scroll-content"
              style={{ 
                width: '50%', 
                padding: '30px',
                overflowY: 'auto',
                maxHeight: '85vh',
                overflowX: 'hidden',
                scrollBehavior: 'smooth'
              }}
            >
              <h2 style={{ 
                color: 'white', 
                fontSize: '24px', 
                fontWeight: 'bold', 
                marginBottom: '16px',
                marginTop: '0'
              }}>
                {project.title}
              </h2>

              <p style={{ 
                color: '#d1d5db', 
                fontSize: '16px', 
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                {project.desc}
              </p>

              {project.subdesc && (
                <p style={{ 
                  color: '#9ca3af', 
                  fontSize: '14px',
                  marginBottom: '20px'
                }}>
                  {project.subdesc}
                </p>
              )}

              {/* Tech Tags */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginBottom: '24px'
              }}>
                {project.tags.map((tag) => (
                  <div
                    key={tag.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      style={{ width: '16px', height: '16px', borderRadius: '50%' }}
                    />
                    <span style={{ color: '#d1d5db', fontSize: '12px' }}>
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Project Details Grid */}
              {(project.category || project.duration || project.teamSize || project.role || project.status) && (
                <div style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <h3 style={{
                    color: '#3b82f6',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    marginTop: '0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Project Details
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    {project.category && (
                      <div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 4px 0' }}>Category</p>
                        <p style={{ color: '#d1d5db', fontSize: '14px', margin: '0', fontWeight: '500' }}>{project.category}</p>
                      </div>
                    )}
                    {project.status && (
                      <div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 4px 0' }}>Status</p>
                        <p style={{ 
                          color: project.status === 'Completed' ? '#10b981' : '#fbbf24', 
                          fontSize: '14px', 
                          margin: '0', 
                          fontWeight: '500' 
                        }}>{project.status}</p>
                      </div>
                    )}
                    {project.role && (
                      <div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 4px 0' }}>Role</p>
                        <p style={{ color: '#d1d5db', fontSize: '14px', margin: '0', fontWeight: '500' }}>{project.role}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 4px 0' }}>Duration</p>
                        <p style={{ color: '#d1d5db', fontSize: '14px', margin: '0', fontWeight: '500' }}>{project.duration}</p>
                      </div>
                    )}
                    {project.teamSize && (
                      <div>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 4px 0' }}>Team Size</p>
                        <p style={{ color: '#d1d5db', fontSize: '14px', margin: '0', fontWeight: '500' }}>{project.teamSize}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {project.achievements && project.achievements.length > 0 && (
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h3 style={{
                    color: '#10b981',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    marginTop: '0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>🏆</span> Achievements
                  </h3>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    color: '#d1d5db',
                    fontSize: '14px',
                    lineHeight: '1.8'
                  }}>
                    {project.achievements.map((achievement, index) => (
                      <li key={index} style={{ marginBottom: '6px' }}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features Section */}
              {project.features && project.features.length > 0 && (
                <div style={{
                  backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <h3 style={{
                    color: '#8b5cf6',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    marginTop: '0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>✨</span> Key Features
                  </h3>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    color: '#d1d5db',
                    fontSize: '14px',
                    lineHeight: '1.8'
                  }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '6px' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                  >
                    🚀 Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#3b82f6',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid #3b82f6',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#3b82f6';
                    }}
                  >
                    💻 GitHub
                  </a>
                )}
              </div>

              {/* Access Note */}
              {project.note && (
                <div style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  borderLeft: '3px solid #f59e0b',
                  borderRadius: '4px'
                }}>
                  <p style={{
                    color: '#fbbf24',
                    fontSize: '13px',
                    margin: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🔒</span>
                    <span>{project.note}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;