import { BehaviorSubject } from "rxjs";

export const result$ = new BehaviorSubject(JSON.parse(localStorage.getItem("result")));

if (!result$.value) {
  updateLocalStorage({gamesPlayed : 0, correctAnswers : 0, incorrectAnswers : 0});
}

export function updateLocalStorage(newResult) {
  if (newResult) {
    localStorage.setItem("result", JSON.stringify(newResult));
  }
  result$.next(newResult);
}