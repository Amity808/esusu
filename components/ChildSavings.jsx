import React, { useState } from "react";
import CustomInput from "../components/ui/CustomeInput"
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { toastify } from "react-toastify";
import { Esusu } from "../contract/Esusu"
import {ethers} from "ethers"
import {utils, BrowserProvider } from "zksync-ethers"
import { getWallet } from "../utils/getWallet"
import { Generatepayment } from "../contract/GeneralPayment"

const ChildSavings = () => {
  const placeholders = ["input age you want her to withdraw", "e.g 12, in year"];
  const placeholderAmount = ["Input amount", "Your saving is safe with us"];
  const placeholderAdd = ["Input gudian address", "We secure he future"];

  let provider;

  if (typeof window !== "undefined" && window.ethereum) {
    provider = new BrowserProvider(window.ethereum);
  }

  const [age, setAge] = useState('')
  const [amount, setAmount] = useState('')
  const [gurdianAddress, setGurdianAddress] = useState('')

  const handleClear = () => {
    setAge('')
    setAmount('')
    setGurdianAddress('')
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

  
  
  const saveForChild = async () => {}
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
        <form className=" flex flex-col gap-5">
          <div>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              type="number"
              // onChange={handleChange}
              // onSubmit={onSubmit}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <PlaceholdersAndVanishInput
              placeholders={placeholderAmount}
              // onChange={handleChange}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              // onSubmit={onSubmit}
            />
          </div>
          <div>
            <PlaceholdersAndVanishInput
              placeholders={placeholderAdd}
              type="text"
              // onChange={handleChange}
              onChange={(e) => setGurdianAddress(e.target.value)}
              // onSubmit={onSubmit}
            />
          </div>
          {/* <div>
            <CustomInput placeholder="Newind" className="" />
          </div> */}
          <div className=" flex justify-center">
          <button className="text-white p-4 bg-blue-500/60 rounded-lg text-lg font-bold w-[100px]">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChildSavings;
