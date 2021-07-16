const token = '91b1c0157190b9ff7060af1a7ea2b0';

export default async function sendReq(req,res) 
{
  if (req.method === 'POST') {
    const { SiteClient } = require("datocms-client");
    const client = new SiteClient(token);

    const record = await client.items.create({
        itemType: "975248", // model ID
        ...req.body,
    });

    res.json({
      dados: record,
    })
  return;
  }  
}