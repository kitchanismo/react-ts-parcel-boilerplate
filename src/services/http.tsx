// export function get() {
// 	return new Promise<string>(res => {
// 		setTimeout(() => res('kitchanismo'), 3000)
// 	})
// }

type Callback = (data: string) => void

export const get = (greet: string, cb: Callback): void => {
	setTimeout(() => cb(greet + ' kitchanismo'), 2000)
}
