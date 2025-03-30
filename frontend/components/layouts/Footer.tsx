export function Footer() {
  return (
    <footer className='border-t border-gray-800 bg-black py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold'>
            Fundraising on <span className='text-white'>FUND</span>
            <span className='text-blue-500'>CHAIN</span> is decentralized,
            secure, and transparent.
          </h2>
          <p className='mx-auto max-w-4xl text-gray-400'>
            Get the tools you need to make your fundraiser thrive on{' '}
            <span className='text-white'>FUND</span>
            <span className='text-blue-500'>CHAIN</span>,{' '}
            {`whether you're raising
            crypto funds for yourself, your community, or a global cause. With
            zero platform fees and blockchain-backed security,`}
            <span className='text-white'> FUND</span>
            <span className='text-blue-500'>CHAIN</span> is redefining
            crowdfunding—from humanitarian aid and medical relief to innovative
            projects and nonprofits. Whenever you need support, you can fund it
            here, on-chain.
          </p>
        </div>

        <div className='flex justify-center'>
          <p className='text-sm text-gray-500'>
            © 2025 FundChain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
