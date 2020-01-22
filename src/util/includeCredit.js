let hasIncluded = false

const includeCredit = () => {
  if (!hasIncluded) {
    const msg = `%c    
    Built by Tyler McRobert
    %ctylermcrobert.com
    `

    console.log(
      msg,
      'font-weight: bold; text-transform: uppercase; line-height:1;',
      'font-weight: normal; color: gray'
    )

    hasIncluded = true
  }
}

export default includeCredit
