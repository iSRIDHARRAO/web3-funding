import { tezos } from "./tezos";

export const fundraiser = async (amount) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1X5Axj6T2TGqcr3cgD9J5FoUA3qnDZS46U");
    const op = await contractInstance.methods.fundraiser(amount).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};


export const donor = async (toadd,amounttez) => {
   
  try {
    const contractInstance = await tezos.wallet.at("KT1X5Axj6T2TGqcr3cgD9J5FoUA3qnDZS46U");
    const op = await contractInstance.methods.donor(toadd).send({amount: amounttez,mutez:false});
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const withdraw = async () => {
    try{
    const contractInstance = await tezos.wallet.at("KT1X5Axj6T2TGqcr3cgD9J5FoUA3qnDZS46U");
    const op = await contractInstance.methods.withdraw().send();
    await op.confirmation(1);
    }
    catch(err){
        throw err
    }
}