import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.freetogame.com/api/games', {
      headers: {
        'User-Agent': 'IELTSAce-Frontend/1.0.0',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const games = await response.json();
    
    return NextResponse.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    return NextResponse.json(
      { error: 'Failed to fetch games' },
      { status: 500 }
    );
  }
}