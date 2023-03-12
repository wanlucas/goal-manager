export interface IBranch {
	name: string;
	id: string;
	userId: string;
	xp: number;
	icon: number;
}

export default class Branch {
  public readonly name: string;
  public readonly id: string;     
  public readonly userId: string;
  public readonly xp: number;
  public readonly icon: number;
	
  constructor({name, id, userId, xp, icon}: IBranch) {
    if (!name) {
      throw new Error('Branch must have a name');
    }

    if (typeof name !== 'string') {
      throw new Error('Branch name must be a string');
    }

    if (typeof id !== 'string') {
      throw new Error('Branch id must be a string');
    }

    if (!userId) {
      throw new Error('Branch must have a user id');
    }

    if (typeof userId !== 'string') {
      throw new Error('Branch user id must be a string');
    }

    if (xp && typeof xp !== 'number') {
      throw new Error('Branch xp must be a number');
    }

    if (icon && typeof icon !== 'number') {
      throw new Error('Branch icon must be a number');
    }

    this.xp = xp ?? 0;
    this.icon = icon ?? 0;
    this.name = name;
    this.id = id;
    this.userId = userId;
  }
}