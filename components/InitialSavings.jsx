import React, { useState } from "react";
import CustomInput from "../components/ui/CustomeInput"
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { toast } from "react-toastify";
import { Esusu } from "../contract/Esusu"
import {ethers} from "ethers"
import {utils, BrowserProvider } from "zksync-ethers"
import { getWallet } from "../utils/getWallet"
import { Generatepayment } from "../contract/GeneralPayment"
import { useWriteContract, useSimulateContract, useReadContract } from "wagmi"

const InitialSavings = () => {
  const placeholders = ["input days you want her to withdraw", "e.g 12, in year"];
  const placeholdertargetAmount = ["Input targetAmount", "Your saving is safe with us"];
  const placeholderAdd = ["Savings Purpose", "We secure the future"];

  let provider;

  if (typeof window !== "undefined" && window.ethereum) {
    provider = new BrowserProvider(window.ethereum);
  }

  const [days, setDays] = useState('')
  const [purpose, setPurpose] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const isFormFilled = days && targetAmount && purpose

  const handleClear = () => {
    setDays('')
    setTargetAmount('')
    setPurpose('')
  }

  const wallet = getWallet(process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY);
  
  const esusuContract = new ethers.Contract(
    Esusu.address,
    Esusu.abi,
    wallet
  )

  const paymasterParams = utils.getPaymasterParams(Generatepayment.address, {
    type: "General",
    innerInput: new Uint8Array(),
  })

  const savepromise = async () => {
    if(!isFormFilled) alert("Please the correct details")

      let paymasterBalance = await provider.getBalance(Generatepayment.address);
      console.log("Balance paymaster ", paymasterBalance.toString());

      const savetargetAmount = BigInt(Math.round(targetAmount * 1000000))

      const result = await esusuContract.initialSaving(
        days, purpose, savetargetAmount
        // , {
        //   customData: {
        //     gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        //     paymasterParams: paymasterParams,
        //   }
          
        // }
      );

      await result.wait();

      console.log(result, "result")
      handleClear();
  }
  
  const initialSave = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(savepromise(), {
        pending: "Saving...",
        success: "Saved successfully, congratulation",
        error: "Error while saving, contact admin",
      })
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className=" mt-14">
      <div className=" text-white text-lg font-bold flex justify-center items-center flex-col pt-10 pb-10 gap-7">
        <p>Welcome address</p>
        <p className=" text-center">
          Connect your child wallet address <br /> Any address connect to the
          dapp will be regarded as your child
        </p>
      </div>
      <div>
        <form className=" flex flex-col gap-5 justify-center items-center" onSubmit={initialSave}>
          <div>
            <input type="text" placeholder="Days" onChange={(e) => setDays(e.target.value)} />
          </div>
          <div>
            <input type="text" placeholder="purpose" onChange={(e) => setPurpose(e.target.value)} />
          </div>
          <div>
            <input type="number" placeholder="amount" onChange={(e) => setTargetAmount(e.target.value)} />
          </div>
          <div className=" flex justify-center">
          <button className="text-white p-4 bg-blue-500/60 rounded-lg text-lg font-bold w-[100px]" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InitialSavings;
