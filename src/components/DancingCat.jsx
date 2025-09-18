import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const { isAnimating, animationSpeed, speedOptions, toggleAnimation, changeSpeed } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat ${isAnimating ? `dancing speed-${animationSpeed}` : ''}`}
        onClick={toggleAnimation}
      >
        <img src={catSvg} alt="Dancing Cat" />
      </div>

      <div className="controls">
        <button
          className={`dance-button ${isAnimating ? 'active' : ''}`}
          onClick={toggleAnimation}
        >
          {isAnimating ? '멈추기' : '춤추기'}
        </button>
      </div>

      <div className="speed-controls">
        <h3>춤 속도 조절</h3>
        <div className="speed-buttons">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              className={`speed-button ${animationSpeed === option.value ? 'active' : ''}`}
              onClick={() => changeSpeed(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="instruction">
        고양이를 클릭하거나 버튼을 눌러서 춤을 춰보세요!<br />
        <small>스페이스바로도 조작할 수 있어요!</small>
      </p>
    </div>
  )
}

export default DancingCat