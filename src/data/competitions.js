// Positions are plotted in a 0-100 percentage grid so the constellation
// can be drawn responsively as connected stars.
const competitions = [
  { id: 'c1', name: 'CodeQuasar', desc: 'Competitive programming under time pressure.', x: 12, y: 20 },
  { id: 'c2', name: 'RoboTrek', desc: 'Autonomous bots race a charted course.', x: 30, y: 12 },
  { id: 'c3', name: 'PixelDrift', desc: 'UI/UX design sprint, judged live.', x: 48, y: 24 },
  { id: 'c4', name: 'CircuitLore', desc: 'Analog and digital electronics build-off.', x: 68, y: 14 },
  { id: 'c5', name: 'DataChart', desc: 'Data storytelling and visualization challenge.', x: 84, y: 26 },
  { id: 'c6', name: 'CipherTrail', desc: 'A cryptography and puzzle hunt across campus.', x: 20, y: 55 },
  { id: 'c7', name: 'BuildWorks', desc: 'Hardware prototyping under a strict parts budget.', x: 45, y: 62 },
  { id: 'c8', name: 'VoyagerPitch', desc: 'Startup pitch competition for student founders.', x: 70, y: 58 },
  { id: 'c9', name: 'FrameForge', desc: 'Short-film and animation competition.', x: 88, y: 66 },
]

// Connections describe which competitions are linked in the constellation
const links = [
  ['c1', 'c2'], ['c2', 'c3'], ['c3', 'c4'], ['c4', 'c5'],
  ['c1', 'c6'], ['c6', 'c7'], ['c7', 'c8'], ['c8', 'c9'],
  ['c3', 'c7'], ['c4', 'c8'],
]

export { competitions, links }
