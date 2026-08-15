// Web Audio API Synthesizer for Hotel & Restaurant Marissa Chime

class NotificationSoundService {
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Play luxury two-tone or three-tone hospitality bell chime
  public playChime(type: 'waiter' | 'bill' = 'waiter'): void {
    if (this.isMuted) return;

    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;

      if (type === 'bill') {
        // Higher urgency bell sequence: E5 (659.25Hz) -> G5 (783.99Hz) -> B5 (987.77Hz)
        this.playTone(ctx, 659.25, now, 0.5);
        this.playTone(ctx, 783.99, now + 0.18, 0.5);
        this.playTone(ctx, 987.77, now + 0.36, 0.9);
      } else {
        // Smooth service chime: C5 (523.25Hz) -> G5 (783.99Hz)
        this.playTone(ctx, 523.25, now, 0.6);
        this.playTone(ctx, 783.99, now + 0.22, 1.1);
      }
    } catch (e) {
      console.warn('Audio playback failed or requires user gesture:', e);
    }
  }

  private playTone(ctx: AudioContext, frequency: number, startTime: number, duration: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, startTime);

    // Smooth envelope (fast attack, exponential decay for bell resonance)
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.35, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const soundService = new NotificationSoundService();
