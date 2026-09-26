export interface DirectionItem {
  id: string;
  title: string;
  shortDesc: string;
  focusTags: string[];
  recommendedFor: string;
  category: 'rehab' | 'spine' | 'women' | 'general';
}

export interface ScheduleSlot {
  time: string;
  discipline: 'ЛФК' | 'йога';
  daysLabel: string;
  daysGroup: 'mon_wed_fri' | 'tue_thu' | 'sat';
  period: 'morning' | 'afternoon' | 'evening';
  note?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  direction: string;
  preferredDay: string;
  preferredTime: string;
  comment: string;
}
