export interface Airdrop {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
  cost: number;
  status: 'ongoing' | 'upcoming' | 'ended';
  reward_date: string;
  airdrop_confidentiality: 'confirmed' | 'not-confirmed';
  fund_raised: number;
  backers: string;
  website: string;
  social_medias: Record<string, string>;
  eligibility_checker: string;
  claim_airdrop: string;
  image: string;
  created_at: string;
  updated_at: string;
  steps: Step[];
  token_symbol: string;
  total_fund_goal: number;
  start_date: string;
  end_date: string;
}

export interface Step {
  id: number;
  description: string;
  image: string;
}

