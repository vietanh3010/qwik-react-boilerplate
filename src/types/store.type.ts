

export type CombineStateAction<State, Action> = Action & {
    state: State
}