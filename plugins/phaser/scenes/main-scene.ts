import { Redhat } from '../objects/redhat';
import redhat from '@/assets/phaser/redhat.png';
import redParticle from '@/assets/phaser/red.png';

export class MainScene extends Phaser.Scene {
  private myRedhat!: Redhat;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload(): void {
    this.load.image('redhat', redhat);
    this.load.image('redParticle', redParticle);
  }

  create(): void {
    // @ts-ignore
    const particles = this.add.particles('redParticle');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD'
    });

    this.myRedhat = new Redhat({
      scene: this,
      x: 400,
      y: 300,
      texture: 'redhat'
    });

    // @ts-ignore
    emitter.startFollow(this.myRedhat);
  }
}
