"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function WalletInfoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>New to wallet?</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              What is a wallet?
            </DialogTitle>
            <DialogDescription>
              A blockchain wallet is a digital wallet for securely storing,
              sending, and receiving cryptocurrencies. It interacts with a
              blockchain to track balances and transactions, storing private and
              public keys needed to send crypto funds.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Wallet icon"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-medium">A Home for your Digital Assets</h3>
                <p className="text-sm text-gray-600">
                  Wallets are used to send, receive, store, and display digital
                  assets like Ethereum and NFTs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Login icon"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-medium">A New Way to Log In</h3>
                <p className="text-sm text-gray-600">
                  Instead of creating new accounts and passwords on every
                  website, just connect your wallet.
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Connect Wallet
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
