/*export const setAuthorityInstructionData = struct<SetAuthorityInstructionData>([
    u8('instruction'),
    u8('authorityType'),
    u8('newAuthorityOption'),
    publicKey('newAuthority'),
]);

export enum AuthorityType {
    MintTokens = 0,
    FreezeAccount = 1,
    AccountOwner = 2,
    CloseAccount = 3,
}
--------------

/** Instructions defined by the (token) program /
export enum TokenInstruction {
    InitializeMint = 0,
    InitializeAccount = 1,
    InitializeMultisig = 2,
    Transfer = 3,
    Approve = 4,
    Revoke = 5,
    SetAuthority = 6,
    MintTo = 7,
    Burn = 8,
    CloseAccount = 9,
    FreezeAccount = 10,
    ThawAccount = 11,
    TransferChecked = 12,
    ApproveChecked = 13,
    MintToChecked = 14,
    BurnChecked = 15,
    InitializeAccount2 = 16,
    SyncNative = 17,
    InitializeAccount3 = 18,
    InitializeMultisig2 = 19,
    InitializeMint2 = 20,
    GetAccountDataSize = 21,
    InitializeImmutableOwner = 22,
    AmountToUiAmount = 23,
    UiAmountToAmount = 24,
    InitializeMintCloseAuthority = 25,
    TransferFeeExtension = 26,
    ConfidentialTransferExtension = 27,
    DefaultAccountStateExtension = 28,
    Reallocate = 29,
    MemoTransferExtension = 30,
    CreateNativeMint = 31,
    InitializeNonTransferableMint = 32,
    InterestBearingMintExtension = 33,
    CpiGuardExtension = 34,
    InitializePermanentDelegate = 35,
}
*/


function Auth_encoding(i2, i3, newAuth){ //? [u8,u8,u8,k]

  var ax = new Array(32+3);

  ax.fill(0);
    
  if (i3==1){

    for (var i=0;i<32; i++){

      ax[i+3] = k1[i];

      }
      
    }

  ax[0] =  6; //i1; // setAuth instruction

  ax[1] = i2; // expect 0 or 2?

  ax[2] = i3; //

  return ax;

  }



