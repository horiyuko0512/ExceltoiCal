import fs from 'fs';
import XLSX from 'xlsx';
import ical from 'ical-generator';
import path from 'path';
import { fileURLToPath } from 'url';
XLSX.set_fs(fs);

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const excelFilePath = path.resolve(__dirname, 'sample-schedule.xlsx');
const myName = 'Suzuki';
const workbook = XLSX.readFile(excelFilePath)
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const shifts = [];
let currentDate = null;
const sheetJson = XLSX.utils.sheet_to_json(sheet, {header: 1});
sheetJson.forEach((row) => {
  if (row.length === 1){
    currentDate = row[0];
  } else if (row.length > 1 && row[0] === myName && currentDate){
    const shiftTimes = row[1].split('\n');
    shiftTimes.forEach((shiftTimes) => {
      shifts.push({
        date: new Date(currentDate),
        time: shiftTimes.trim()
      });
    });
  }  
});

const cal = ical({name: 'シフトカレンダー'});
shifts.forEach(shift => {
  const [startTime, endTime] = shift.time.split('～');
  const startDate = new Date(shift.date);
  const endDate = new Date(shift.date);
  const [startHour, startMinute] =  startTime.split(':').map(Number);
  const [endHour, endMinute] =  endTime.split(':').map(Number);
  if (endHour < startHour || (endHour == startHour && endMinute < startMinute)) {
    endDate.setDate(endDate.getDate() + 1);
  }
});