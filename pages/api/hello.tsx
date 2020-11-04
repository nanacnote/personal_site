// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  setTimeout(() => {
    res.json({
      name: 'Cedi Note',
      email: 'adjeibohyen@hotmail.co.uk',
      phone: '07456 73644',
      'date of birth': '22 Feb 2000',
      country: 'MC',
      trophies: '3',
      rank: '1',
      memberSince: '20 Sept 2020',
      userPhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    })
  }, 5000)
}

export default handler
