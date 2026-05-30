import { CategoryType, ExpenseCategoriesType } from "@/types";
import * as Icons from "phosphor-react-native";

export const expenseCategories: ExpenseCategoriesType = {
  belanja: {
    label: "Belanja",
    value: "belanja",
    icon: Icons.ShoppingCartIcon,
    bgColor: "#4B5563", // Deep Teal Green
  },
  sewa: {
    label: "Sewa",
    value: "sewa",
    icon: Icons.HouseIcon,
    bgColor: "#075985", // Dark Blue
  },
  utilitas: {
    label: "Utilitas",
    value: "utilitas",
    icon: Icons.LightbulbIcon,
    bgColor: "#ca8a04", // Dark Golden Brown
  },
  transportasi: {
    label: "Transportasi",
    value: "transportasi",
    icon: Icons.CarIcon,
    bgColor: "#b45309", // Dark Orange-Red
  },
  hiburan: {
    label: "Hiburan",
    value: "hiburan",
    icon: Icons.FilmStripIcon,
    bgColor: "#0f766e", // Darker Red-Brown
  },
  makan: {
    label: "Makan",
    value: "makan",
    icon: Icons.ForkKnifeIcon,
    bgColor: "#be185d", // Dark Red
  },
  kesehatan: {
    label: "Kesehatan",
    value: "kesehatan",
    icon: Icons.HeartIcon,
    bgColor: "#e11d48", // Dark Purple
  },
  asuransi: {
    label: "Asuransi",
    value: "asuransi",
    icon: Icons.ShieldCheckIcon,
    bgColor: "#404040", // Dark Gray
  },
  tabungan: {
    label: "Tabungan",
    value: "tabungan",
    icon: Icons.PiggyBankIcon,
    bgColor: "#065F46", // Deep Teal Green
  },
  pakaian: {
    label: "Pakaian",
    value: "pakaian",
    icon: Icons.TShirtIcon,
    bgColor: "#7c3aed", // Dark Indigo
  },
  pribadi: {
    label: "Pribadi",
    value: "pribadi",
    icon: Icons.UserIcon,
    bgColor: "#a21caf", // Deep Pink
  },
  lainnya: {
    label: "Lainnya",
    value: "lainnya",
    icon: Icons.DotsThreeOutlineIcon,
    bgColor: "#525252", // Neutral Dark Gray
  },
};

export const incomeCategory: CategoryType = {
  label: "Pemasukkan",
  value: "pemasukkan",
  icon: Icons.CurrencyDollarSimpleIcon,
  bgColor: "#16a34a", // Dark
};

export const transactionTypes = [
  { label: "Expense", value: "expense" },
  { label: "Income", value: "income" },
];
