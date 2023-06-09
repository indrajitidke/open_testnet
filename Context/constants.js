import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0xdB05A386810c809aD5a77422eb189D36c7f24402";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0xbf2ad38fd09F37f50f723E35dd84EEa1C282c5C9";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0xF1AEEDDDb5e3882A182566c274C72c7eD517239D";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0x497c00B7F0461515D7Cc1Fc6b9904539df378624";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0xc089493e8Eef1AACbC678Cc734F62301894B4AcD";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0xFCFE742e19790Dd67a627875ef8b45F17DB1DaC6";
export const userStorageDataABI = userStorgeData.abi;
// SingleSwapToken deployed to 0xF1AEEDDDb5e3882A182566c274C72c7eD517239D
// swapMultiHop deployed to 0x497c00B7F0461515D7Cc1Fc6b9904539df378624
// UserStorageData deployed to 0xc089493e8Eef1AACbC678Cc734F62301894B4AcD