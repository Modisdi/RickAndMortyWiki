export const charactersMap = characters => (
  characters.map(character => {
    const {
      id, name, status, species, gender, origin, location,
    } = character
    return {
      id, name, status, species, gender, origin: origin.name, location: location.name,
    }
  })
)
