import Image from "next/image";
export default function Dashboard2() {
  return (
    <div className="flex gap-5">
      <div>
        <div className="flex gap-4">
          <div className="w-[350px] h-auto p-4 rounded-2xl bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <span className="w-auto rounded-full h-auto px-4 py-3 bg-gray-700 text-xs text-white">
                Buy crypto
              </span>
              <span className="w-auto rounded-full h-auto px-6 py-3 bg-gray-700 text-xs text-white">
                Deposit
              </span>{" "}
              <span className="w-auto rounded-full h-auto px-4 py-3 bg-gray-700 text-xs text-white">
                Withdraw
              </span>
            </div>
            <Image
              src="/images/asset.svg"
              alt="asset"
              width={330}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src="/images/bitcointalk.svg"
              alt="asset"
              width={320}
              height={90}
              className="bg-gray-800 rounded-xl "
            />
            <Image
              src="/images/tradebot.svg"
              alt="asset"
              width={320}
              height={90}
              className=""
            />
          </div>
        </div>
        <div className="mt-4 h-100 bg-gray-800 rounded-t-2xl">
          <Image
            src="/images/market.svg"
            alt="market"
            width={650}
            height={10}
            className=""
          />
        </div>
      </div>
      <div className="w-80">
        <Image
          src="/images/news.svg"
          alt="news"
          width={295}
          height={200}
          className="rounded-xl bg-gray-800"
        />
      </div>
    </div>
  );
}
