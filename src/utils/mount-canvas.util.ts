interface Net extends NetworkInformation {
  saveData: boolean
}

const MountCanvas = () =>
  (typeof window !== 'undefined' && (navigator.connection as Net).saveData) ||
  !matchMedia('(min-width: 768px)').matches

export default MountCanvas
