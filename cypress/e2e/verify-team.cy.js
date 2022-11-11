describe('Verify criket team for upcomming match', () => {

  beforeEach(() => {
    cy.fixture('team.json').as('teamJSON')
  })

  it('Check if team has only 4 foreign players', () => {
    cy.get('@teamJSON').then((team) => {
      const players = team.player
      let foreignPlayers = 0
      players.forEach((player) => {
        if (player.country !== 'India') {
          foreignPlayers++
        }
      })
      expect(foreignPlayers).to.equal(4)
    })
  })

  it('Check if there is atleast one wicketkeeper', () => {
    cy.get('@teamJSON').then((team) => {
      const players = team.player
      let numOfwicketkeeper = 0
      players.forEach((player) => {
        if (player.role === "Wicket-keeper") {
          numOfwicketkeeper++
        }
      })
      expect(numOfwicketkeeper).to.be.at.least(1)
    })
  })

})