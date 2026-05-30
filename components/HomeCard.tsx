import { colors, spacingX, spacingY } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import useFetchData from "@/hooks/useFetchData";
import { WalletType } from "@/types";
import { scale, verticalScale } from "@/utils/styling";
import { orderBy, where } from "firebase/firestore";
import * as Icons from "phosphor-react-native";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Typo from "./Typo";

const HomeCard = () => {
  const { user } = useAuth();
  const {
    data: wallets,
    error,
    loading: walletLoading,
  } = useFetchData<WalletType>("wallets", [
    where("uid", "==", user?.uid),
    orderBy("created", "desc"),
  ]);

  const getTotals = () => {
    // Tambahan fallback (wallets || []) agar aman saat loading
    return (wallets || []).reduce(
      (totals: any, item: WalletType) => {
        totals.balance = totals.balance + Number(item.amount);
        totals.income = totals.income + Number(item.totalIncome);
        totals.expenses = totals.expenses + Number(item.totalExpenses);
        return totals;
      },
      { balance: 0, income: 0, expenses: 0 },
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/card.png")}
      resizeMode="stretch"
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View>
          {/* total balance */}
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={17} fontWeight={"500"}>
              Total Saldo
            </Typo>
            <Icons.DotsThreeOutlineIcon
              size={verticalScale(23)}
              color={colors.black}
              weight="fill"
            />
          </View>

          {/* SKELETON: Total Balance */}
          {walletLoading ? (
            <View style={styles.skeletonBalance} />
          ) : (
            <Typo color={colors.black} size={30} fontWeight={"bold"}>
              Rp {getTotals()?.balance?.toLocaleString("id-ID")}
            </Typo>
          )}
        </View>

        {/* total expense and income */}
        <View style={styles.stats}>
          {/* income */}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowDownIcon
                  size={verticalScale(15)}
                  color={colors.black}
                  weight="bold"
                />
              </View>
              <Typo size={15} color={colors.neutral700} fontWeight={"500"}>
                Pemasukkan
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              {/* SKELETON: Income */}
              {walletLoading ? (
                <View style={styles.skeletonIncomeExpense} />
              ) : (
                <Typo size={16} color={colors.green} fontWeight={"600"}>
                  Rp {getTotals()?.income?.toLocaleString("id-ID")}
                </Typo>
              )}
            </View>
          </View>

          {/* expense */}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpense}>
              <View style={styles.statsIcon}>
                <Icons.ArrowUpIcon
                  size={verticalScale(15)}
                  color={colors.black}
                  weight="bold"
                />
              </View>
              <Typo size={15} color={colors.neutral700} fontWeight={"500"}>
                Pengeluaran
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              {/* SKELETON: Expense */}
              {walletLoading ? (
                <View style={styles.skeletonIncomeExpense} />
              ) : (
                <Typo size={16} color={colors.rose} fontWeight={"600"}>
                  Rp {getTotals()?.expenses?.toLocaleString("id-ID")}
                </Typo>
              )}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  bgImage: {
    height: scale(210),
    width: "100%",
  },
  container: {
    padding: spacingX._20,
    paddingHorizontal: scale(23),
    height: "87%",
    width: "100%",
    justifyContent: "space-between",
  },
  totalBalanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsIcon: {
    backgroundColor: colors.neutral350,
    padding: spacingY._5,
    borderRadius: 50,
  },
  incomeExpense: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._7,
  },
  // TAMBAHAN STYLE UNTUK SKELETON
  skeletonBalance: {
    width: scale(180),
    height: verticalScale(35),
    backgroundColor: colors.neutral300,
    borderRadius: 8,
    marginTop: 2,
  },
  skeletonIncomeExpense: {
    width: scale(100),
    height: verticalScale(20),
    backgroundColor: colors.neutral300,
    borderRadius: 6,
    marginTop: 2,
  },
});
