export const DangerButton = props => (
  <button
    style={{
      padding: '10px',
      fontSize: '36px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: 'red'
    }}
  >
    {props.children}
  </button>
)
