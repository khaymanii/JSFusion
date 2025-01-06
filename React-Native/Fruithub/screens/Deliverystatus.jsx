import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Deliverystatus() {
  return (
    <View style={tw`py-8 bg-[#FFA451] flex-1`}>
      <View style={tw`rounded-full w-20 px-2 py-2 bg-white text-center mx-4 `}>
        Go back
      </View>{" "}
      <Text style={tw`text-white text-lg text-center font-semibold pb-8`}>
        Delivery Status
      </Text>
      <View style={tw`bg-white h-full mb-4 pt-8`}>
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-orange-50`}>
              <Image
                source="../assets/images/order.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>Order Taken</Text>
            </View>
          </View>
          <Image
            source="../assets/icons/verify.png"
            style={tw`w-[40px] h-[40px]`}
          />{" "}
        </View>
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-blue-50`}>
              <Image
                source="../assets/images/prepared.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>
                Order Is Being Prepared
              </Text>
            </View>
          </View>
          <Image
            source="../assets/icons/verify.png"
            style={tw`w-[40px] h-[40px]`}
          />{" "}
        </View>{" "}
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-pink-50`}>
              <Image
                source="../assets/images/delivered.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>
                Order Is Being Delivered{" "}
              </Text>
              <Text>Your delivery agent is coming</Text>
            </View>
          </View>
          <Image
            source="../assets/icons/call.png"
            style={tw`w-[45px] h-[45px]`}
          />{" "}
        </View>
        <View style={tw`mx-4 mb-8`}>
          {" "}
          <Image
            source="../assets/images/map.png"
            style={tw`w-[100%] h-[150px] rounded-xl`}
          />
        </View>
        <View style={tw`flex-row items-center justify-between mx-4 mb-8`}>
          <View style={tw`flex-row gap-4 items-center`}>
            <View style={tw`rounded-xl p-4 bg-green-50`}>
              <Image
                source="../assets/icons/verify.png"
                style={tw`w-[40px] h-[40px]`}
              />{" "}
            </View>
            <View>
              <Text style={tw`font-semibold text-md`}>Order Received </Text>
            </View>
          </View>
          <Image
            source="../assets/icons/verify.png"
            style={tw`w-[40px] h-[40px]`}
          />{" "}
        </View>
      </View>
    </View>
  );
}
