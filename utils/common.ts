export const getLast7Days = () => {
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const result = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    result.push({
      day: daysOfWeek[date.getDay()],
      date: date.toISOString().split("T")[0],
      income: 0,
      expense: 0,
    });
  }
  return result;
  // return an array of all the previous 7 days
};

const MONTH_LABELS_ID = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const getMonthKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

export const formatMonthLabel = (date: Date) =>
  `${MONTH_LABELS_ID[date.getMonth()]}`;

export const getLast12Months = () => {
  const result = [];
  const now = new Date();

  for (let i = 11; i >= 0; i--) {
    // tanggal 1 → tidak overflow di akhir bulan
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

    result.push({
      monthKey: getMonthKey(date), // "2025-06" untuk matching
      month: formatMonthLabel(date), // "1 Jun"
      income: 0,
      expense: 0,
    });
  }

  return result;
};

export const getYearKey = (date: Date) => String(date.getFullYear());

export const getLastNYears = (count = 6) => {
  const result = [];
  const currentYear = new Date().getFullYear();

  for (let i = count - 1; i >= 0; i--) {
    const year = currentYear - i;

    result.push({
      yearKey: String(year),
      year: String(year), // label chart: "2024", "2025", ...
      income: 0,
      expense: 0,
    });
  }

  return result;
};

// Format standar untuk UI umum (Contoh: Rp 1.500.000)
export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format ringkas khusus untuk Chart (Contoh: 1.5Jt, 50rb)
export const formatCompactRupiah = (value: number): string => {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}M`; // Milyar
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}Jt`; // Juta
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}rb`; // Ribu
  }
  return `${value.toString()}`;
};
