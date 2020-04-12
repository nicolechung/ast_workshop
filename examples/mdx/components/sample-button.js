export const SampleButton = props => (
  <button
    style={{
      padding: '10px',
      fontSize: '36px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: 'cyan'
    }}
  >
    {props.children}
  </button>
)
